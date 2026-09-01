import { Component, computed, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { BoutiqueIconComponent } from '../../../features/boutique/boutique-icon/boutique-icon.component';
import { StylistIconComponent } from '../../../features/stylist/stylist-icon/stylist-icon.component';
import { BrandIconComponent } from '../../../features/brand/brand-icon/brand-icon.component';
import { Offering } from '../../../features/offering/offering.interface';
import { offerings } from '../../../features/offering/offering.data';
import {
	OfferingRelations,
	relationsForOffering,
} from '../../../features/offering/offering-relations';
import { OfferingRelationType } from '../../../features/offering/offering-short/offering-short.component';

type FeedAction = 'favourite' | 'ignore';

/** Fallback image shown when a offering has no photos or its photo fails to load. */
const DEFAULT_PHOTO = '/item-default.svg';

@Component({
	imports: [
		ButtonModule,
		StylistIconComponent,
		BoutiqueIconComponent,
		BrandIconComponent,
	],
	templateUrl: './feed.component.html',
	styleUrl: './feed.component.scss',
})
export class FeedComponent {
	private readonly _router = inject(Router);

	readonly favouritedIds = signal<Set<string>>(this._restore('favourited'));
	readonly ignoredIds = signal<Set<string>>(this._restore('ignored'));

	readonly feed = computed<
		{ offering: Offering; relations: OfferingRelations }[]
	>(() => {
		const favourited = this.favouritedIds();
		const ignored = this.ignoredIds();
		return offerings
			.filter(
				(item) => !favourited.has(item._id) && !ignored.has(item._id),
			)
			.map((offering) => ({
				offering,
				relations: relationsForOffering(offering),
			}));
	});

	/** Navigates to the offering's detail page. */
	view(item: Offering): void {
		this._router.navigate(['/offering', item._id]);
	}

	/** Navigates to a related entity's detail page without triggering the offering's own click. */
	viewRelation(event: Event, type: OfferingRelationType, id: string): void {
		event.stopPropagation();
		this._router.navigate(['/', type, id]);
	}

	/** Marks a offering as favourited or ignored, persisting the choice to localStorage. */
	act(item: Offering, action: FeedAction): void {
		if (action === 'favourite') {
			this._update('favourited', this.favouritedIds, item._id);
		} else {
			this._update('ignored', this.ignoredIds, item._id);
		}
	}

	/** Returns the offering's first photo, falling back to the shared default image. */
	photo(item: Offering): string {
		return item.photos[0] || DEFAULT_PHOTO;
	}

	/** Swaps in the default photo when the offering's image fails to load. */
	onPhotoError(event: Event): void {
		(event.target as HTMLImageElement).src = DEFAULT_PHOTO;
	}

	private _update(
		key: 'favourited' | 'ignored',
		state: ReturnType<typeof signal<Set<string>>>,
		id: string,
	): void {
		const next = new Set(state());
		next.add(id);
		state.set(next);
		this._persist(key, next);
	}

	private _restore(key: 'favourited' | 'ignored'): Set<string> {
		try {
			const raw = localStorage.getItem(`feed:${key}`);
			return raw ? new Set<string>(JSON.parse(raw)) : new Set<string>();
		} catch {
			return new Set<string>();
		}
	}

	private _persist(key: 'favourited' | 'ignored', value: Set<string>): void {
		try {
			localStorage.setItem(`feed:${key}`, JSON.stringify([...value]));
		} catch {
			// ignore storage failures (e.g. private browsing)
		}
	}
}
