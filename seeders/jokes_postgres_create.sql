CREATE TABLE "jokes" (
	"id" serial UNIQUE NOT NULL DEFAULT ,
	"joke_category" integer NOT NULL DEFAULT ,
	"jokeSetup" TEXT UNIQUE NOT NULL DEFAULT ,
	"jokePunchline" TEXT UNIQUE NOT NULL DEFAULT ,
	CONSTRAINT "jokes_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "categories" (
	"category_id" serial NOT NULL UNIQUE,
	"joke_id" integer NOT NULL,
	"catagory" TEXT NOT NULL,
	CONSTRAINT "categories_pk" PRIMARY KEY ("category_id")
) WITH (
  OIDS=FALSE
);



ALTER TABLE "jokes" ADD CONSTRAINT "jokes_fk0" FOREIGN KEY ("joke_category") REFERENCES "categories"("category_id");

ALTER TABLE "categories" ADD CONSTRAINT "categories_fk0" FOREIGN KEY ("joke_id") REFERENCES "jokes"("id");

