import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1738486654141 implements MigrationInterface {
    name = 'Migration1738486654141'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "gift" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "description" character varying NOT NULL, "price" double precision NOT NULL, "stock" integer NOT NULL DEFAULT '0', "count_rating" double precision NOT NULL DEFAULT '0', "count_review" integer NOT NULL DEFAULT '0', "is_active" boolean NOT NULL DEFAULT true, "created_by" integer, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_by" integer, "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP WITH TIME ZONE, CONSTRAINT "UQ_3f9493f3c397fc5744f62aa2b1a" UNIQUE ("name"), CONSTRAINT "PK_f91217caddc01a085837ebe0606" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "gift"`);
    }

}
