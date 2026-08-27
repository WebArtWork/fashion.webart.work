import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { CardModule } from '@wawjs/ngx-prime/card';
import { ItemShortComponent } from '../../../components/item/item-short/item-short.component';
import { LeafletMapComponent, LeafletMapMarker } from '../../../shared/leaflet-map/leaflet-map.component';
import { Item } from '../../../item/item.interface';
import { items } from '../../../item/item.data';

type MapCategory = 'items' | 'boutiques' | 'brands';

/**
 * Deviation note: `@wawjs/ngx-map`'s `MapComponent` (`lib-map`) wraps
 * `@angular/google-maps` and requires a Google Maps JS API key/loader plus
 * network access to Google's tile servers. This repo has no key configured
 * anywhere (`environment.ts`, `app.config.ts`, `index.html`) and no
 * `provideNgxMap(...)` call. Rather than introduce an unconfigured external
 * dependency, this page renders a real interactive map using `leaflet` +
 * OpenStreetMap tiles via the shared `LeafletMapComponent` wrapper, which
 * needs no API key at all.
 */
@Component({
	imports: [ButtonModule, CardModule, ItemShortComponent, LeafletMapComponent],
	templateUrl: './map.component.html',
	styleUrl: './map.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MapComponent {
	private readonly _router = inject(Router);

	readonly categories: { value: MapCategory; label: string }[] = [
		{ value: 'items', label: 'Об’єкти' },
		{ value: 'boutiques', label: 'Агенції' },
		{ value: 'brands', label: 'Розробники' },
	];

	readonly activeCategory = signal<MapCategory>('items');

	readonly selected = signal<Item | null>(null);
	private readonly _focusCenter = signal<{ lat: number; lng: number } | null>(null);

	readonly itemsWithCoords = computed(() => items.filter((item) => item.coordinates));

	private readonly _defaultCenter = computed<{ lat: number; lng: number }>(() => {
		const withCoords = this.itemsWithCoords();
		if (!withCoords.length) {
			return { lat: 50.4501, lng: 30.5234 }; // Kyiv, as a sensible default
		}

		const lats = withCoords.map((item) => item.coordinates.lat);
		const lngs = withCoords.map((item) => item.coordinates.lng);
		return {
			lat: (Math.min(...lats) + Math.max(...lats)) / 2,
			lng: (Math.min(...lngs) + Math.max(...lngs)) / 2,
		};
	});

	readonly center = computed<{ lat: number; lng: number }>(() => this._focusCenter() ?? this._defaultCenter());

	readonly zoom = 12;

	readonly markers = computed<LeafletMapMarker[]>(() =>
		this.itemsWithCoords().map((item) => ({
			id: item._id,
			position: item.coordinates,
			title: item.address,
		})),
	);

	selectCategory(category: MapCategory): void {
		this.activeCategory.set(category);
		this.selected.set(null);
	}

	onMarkerSelected(marker: LeafletMapMarker): void {
		const item = items.find((item) => item._id === marker.id) ?? null;
		this.selected.set(item);
	}

	closePanel(): void {
		this.selected.set(null);
	}

	view(item: Item): void {
		this._router.navigate(['/item', item._id]);
	}
}
