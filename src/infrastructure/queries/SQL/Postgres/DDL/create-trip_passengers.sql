-- Table: public.trip_passengers

-- DROP TABLE IF EXISTS public.trip_passengers;

CREATE TABLE IF NOT EXISTS public.trip_passengers
(
    "tripId" integer NOT NULL,
    "passengerId" integer NOT NULL,
    CONSTRAINT "PK_ee14b64ae7c97fc8b046d996c4d" PRIMARY KEY ("tripId", "passengerId"),
    CONSTRAINT "FK_0b85564848586f0499f3a084e0e" FOREIGN KEY ("passengerId")
        REFERENCES public.passenger (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT "FK_a33002f13febd00e1b3e396b4cc" FOREIGN KEY ("tripId")
        REFERENCES public.trip (id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE CASCADE
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.trip_passengers
    OWNER to admin;
-- Index: IDX_0b85564848586f0499f3a084e0

-- DROP INDEX IF EXISTS public."IDX_0b85564848586f0499f3a084e0";

CREATE INDEX IF NOT EXISTS "IDX_0b85564848586f0499f3a084e0"
    ON public.trip_passengers USING btree
    ("passengerId" ASC NULLS LAST)
    TABLESPACE pg_default;
-- Index: IDX_a33002f13febd00e1b3e396b4c

-- DROP INDEX IF EXISTS public."IDX_a33002f13febd00e1b3e396b4c";

CREATE INDEX IF NOT EXISTS "IDX_a33002f13febd00e1b3e396b4c"
    ON public.trip_passengers USING btree
    ("tripId" ASC NULLS LAST)
    TABLESPACE pg_default;