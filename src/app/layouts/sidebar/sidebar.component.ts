import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UserService } from '@wawjs/ngx-bos';
import { TranslateDirective, TranslateService } from '@wawjs/ngx-translate';
import { NavIconComponent } from '../../shared/nav-icon/nav-icon.component';
import { SidebarService } from './sidebar.service';

@Component({
	selector: 'layout-sidebar',
	templateUrl: './sidebar.component.html',
	styleUrl: './sidebar.component.scss',
	imports: [RouterLink, TranslateDirective, NavIconComponent],
})
export class SidebarComponent {
	readonly userService = inject(UserService);
	readonly translateService = inject(TranslateService);
	readonly sidebarService = inject(SidebarService);

	readonly showNames = this.sidebarService.showNames;
	readonly widthPx = this.sidebarService.widthPx;

	readonly isPreview = this.sidebarService.previewVisible;
	readonly isMobile = this.sidebarService.isMobile;

	readonly isOverlay = computed(() => this.isMobile() || this.isPreview());

	readonly hostPositionClass = computed(() => {
		if (this.isMobile()) {
			return 'fixed right-0 top-0 bottom-[var(--topbar-h)] h-[calc(100dvh-var(--topbar-h))]';
		}
		if (this.isPreview()) {
			return 'md:fixed md:right-0 md:top-14 md:h-[calc(100dvh-56px)]';
		}
		return 'md:sticky md:top-14 md:h-[calc(100dvh-56px)]';
	});
	readonly isMinimized = computed(
		() =>
			!this.isMobile() &&
			!this.isPreview() &&
			this.sidebarService.webMode() === 'minimized',
	);

	closeIfOverlay(): void {
		if (this.isOverlay()) this.sidebarService.closeAfterNavigation();
	}

	closeBackdrop(e: MouseEvent): void {
		e.preventDefault();
		e.stopPropagation();

		this.sidebarService.requestClose();
	}

	logout(): void {
		this.userService.logout();
		this.sidebarService.closeAfterNavigation();
	}
}
