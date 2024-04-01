-- Table: public.invoice

-- DROP TABLE IF EXISTS public.invoice;

CREATE TABLE IF NOT EXISTS public.invoice
(
    id integer NOT NULL DEFAULT nextval('invoice_id_seq'::regclass),
    created timestamp without time zone NOT NULL DEFAULT now(),
    updated timestamp without time zone NOT NULL DEFAULT now(),
    amount integer NOT NULL,
    "paymentMethod" invoice_paymentmethod_enum NOT NULL,
    paid boolean NOT NULL,
    "baseFare" integer NOT NULL,
    "distanceFare" integer NOT NULL,
    "additionalFees" integer NOT NULL,
    "estimatedFare" integer NOT NULL,
    "totalFare" integer NOT NULL,
    "tripId" integer,
    CONSTRAINT "PK_15d25c200d9bcd8a33f698daf18" PRIMARY KEY (id),
    CONSTRAINT "REL_60e83c189960a758cb56b128b7" UNIQUE ("tripId"),
    CONSTRAINT "FK_60e83c189960a758cb56b128b70" FOREIGN KEY ("tripId")
        REFERENCES public.trip (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.invoice
    OWNER to admin;