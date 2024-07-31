CREATE TABLE IF NOT EXISTS "post" (
	"user_id" text NOT NULL,
	"content" text,
	"created_at" timestamp with time zone NOT NULL,
	"likes" integer DEFAULT 0 NOT NULL
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "post" ADD CONSTRAINT "post_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
