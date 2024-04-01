-- Table: public.driver

-- DROP TABLE IF EXISTS public.driver;

CREATE TABLE IF NOT EXISTS public.driver
(
    id integer NOT NULL DEFAULT nextval('driver_id_seq'::regclass),
    created timestamp without time zone NOT NULL DEFAULT now(),
    updated timestamp without time zone NOT NULL DEFAULT now(),
    name character varying COLLATE pg_catalog."default" NOT NULL,
    "position" geometry(Point),
    rating integer NOT NULL DEFAULT 0,
    "isAvailable" boolean NOT NULL DEFAULT true,
    "userId" integer,
    CONSTRAINT "PK_61de71a8d217d585ecd5ee3d065" PRIMARY KEY (id),
    CONSTRAINT "REL_abf4fe92b1ed7d4ffa2d4e8045" UNIQUE ("userId"),
    CONSTRAINT "FK_abf4fe92b1ed7d4ffa2d4e8045a" FOREIGN KEY ("userId")
        REFERENCES public."user" (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.driver
    OWNER to admin;