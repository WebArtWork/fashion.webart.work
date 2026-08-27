export type CommentEntityType = 'item' | 'offering' | 'collection' | 'brand' | 'boutique' | 'stylist' | 'user';

export type CommentModerationStatus = 'pending' | 'approved' | 'rejected' | 'flagged';

export type VerifiedReviewerStatus = 'verified-client' | 'verified-model' | 'verified-buyer' | 'verified-owner' | null;

export interface EntityComment {
	_id: string;
	entityType: CommentEntityType;
	entityId: string;
	authorUserId: string;
	rating: number | null;
	text: string;
	verifiedReviewerStatus: VerifiedReviewerStatus;
	helpfulVotes: number;
	moderationStatus: CommentModerationStatus;
	date: string;
}
