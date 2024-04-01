-- Table: public.passenger

-- DROP TABLE IF EXISTS public.passenger;

CREATE TABLE IF NOT EXISTS public.passenger
(
    id integer NOT NULL DEFAULT nextval('passenger_id_seq'::regclass),
    created timestamp without time zone NOT NULL DEFAULT now(),
    updated timestamp without time zone NOT NULL DEFAULT now(),
    name character varying COLLATE pg_catalog."default" NOT NULL,
    "position" geometry(Point),
    rating integer NOT NULL DEFAULT 0,
    "userId" integer,
    CONSTRAINT "PK_50e940dd2c126adc20205e83fac" PRIMARY KEY (id),
    CONSTRAINT "REL_d6ed5e441e208af2735390adb0" UNIQUE ("userId"),
    CONSTRAINT "FK_d6ed5e441e208af2735390adb06" FOREIGN KEY ("userId")
        REFERENCES public."user" (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.passenger
    OWNER to admin;