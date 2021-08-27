import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createTableReligions1610507450740 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'religion',
            columns: [
                {
                    name: 'id',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                    type: 'int',
                    isNullable: false
                },
                {
                    name: 'nama',
                    isUnique: true,
                    type: 'varchar',
                    isNullable: false,
                    length: '100'
                },
                {
                    name: 'created_at',
                    isNullable: false,
                    type: 'timestamp',
                    default: 'now()',
                },
                {
                    name: 'updated_at',
                    isNullable: false,
                    type: 'timestamp',
                    default: 'now()',
                    onUpdate: 'now()'
                },
                {
                    name: 'deleted_at',
                    isNullable: true,
                    type: 'timestamp'
                }
            ]
        }), true)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('religion')
    }

}
