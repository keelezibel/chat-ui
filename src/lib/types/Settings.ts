import { defaultModel } from "$lib/server/models";
import type { Timestamps } from "./Timestamps";
import type { User } from "./User";

export interface Settings extends Timestamps {
	userId?: User["_id"];
	sessionId?: string;

	/**
	 * Note: Only conversations with this settings explicitly set to true should be shared.
	 *
	 * This setting is explicitly set to true when users accept the ethics modal.
	 * */
	shareConversationsWithModelAuthors: boolean;
	ethicsModalAcceptedAt: Date | null;
	ethicsModalAccepted: boolean;
	activeModel: string;
}

// TODO: move this to a constant file along with other constants
export const DEFAULT_SETTINGS = {
	shareConversationsWithModelAuthors: true,
	activeModel: defaultModel.id,
	ethicsModalAcceptedAt: new Date(),
	ethicsModalAccepted: true,
	sessionId: "1234567890"
};
