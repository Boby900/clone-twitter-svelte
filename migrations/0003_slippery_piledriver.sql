ALTER TABLE "post" DROP CONSTRAINT "post_user_id_user_id_fk";
--> statement-breakpoint
ALTER TABLE "post" ALTER COLUMN "content" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "post" DROP COLUMN IF EXISTS "user_id";--> statement-breakpoint
ALTER TABLE "post" DROP COLUMN IF EXISTS "created_at";--> statement-breakpoint
ALTER TABLE "post" DROP COLUMN IF EXISTS "likes";