import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1738483056992 implements MigrationInterface {
    name = 'Migration1738483056992'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "fullname" character varying NOT NULL, "role" character varying NOT NULL DEFAULT 'user', "is_active" boolean NOT NULL DEFAULT true, "created_by" integer, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_by" integer, "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP WITH TIME ZONE, CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
