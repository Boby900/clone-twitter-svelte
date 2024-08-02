import { pgTable, text, timestamp, integer } from "drizzle-orm/pg-core";

export const userTable = pgTable("user", {
	id: text("id").primaryKey(),
	username: text('username'),
	password_hash: text('password_hash')
});

export const sessionTable = pgTable("session", {
	id: text("id").primaryKey(),
	userId: text("user_id")
		.notNull()
		.references(() => userTable.id),
	expiresAt: timestamp("expires_at", {
		withTimezone: true,
		mode: "date"
	}).notNull()
});

export const postTable = pgTable("post", {
	
	
	content: text("content").notNull(),
	likes: integer("likes").default(0),
	imageUrl: text("imageUrl")

	
});
export interface DatabaseUser {
	id: string;
	username: string;
	password_hash: string;
}
