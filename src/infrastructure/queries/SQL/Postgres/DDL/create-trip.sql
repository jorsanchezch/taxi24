-- Table: public.trip

-- DROP TABLE IF EXISTS public.trip;

CREATE TABLE IF NOT EXISTS public.trip
(
    id integer NOT NULL DEFAULT nextval('trip_id_seq'::regclass),
    created timestamp without time zone NOT NULL DEFAULT now(),
    updated timestamp without time zone NOT NULL DEFAULT now(),
    "startPos" geometry(Point) NOT NULL,
    "endPos" geometry(Point),
    "startTime" timestamp with time zone,
    "endTime" timestamp with time zone,
    status trip_status_enum NOT NULL DEFAULT 'created'::trip_status_enum,
    "driverId" integer,
    CONSTRAINT "PK_714c23d558208081dbccb9d9268" PRIMARY KEY (id),
    CONSTRAINT "FK_2034f2f2e58179b42c4866f6f13" FOREIGN KEY ("driverId")
        REFERENCES public.driver (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.trip
    OWNER to admin;