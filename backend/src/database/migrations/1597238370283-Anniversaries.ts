import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export default class Anniversaries1597238370283 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table ({
            name: 'anniversaries',
            columns: [
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true,
                    generationStrategy: 'uuid',
                    default: 'uuid_generate_v4()',
                },
                {
                    name: 'birthday_person', 
                    type: 'varchar',
                },
                {
                    name: 'birthday_date', 
                    type: 'date',
                },
                {
                    name: 'user_id', 
                    type: 'uuid',
                },
                {
                    name: 'create_at',
                    type: 'timestamp',
                    default: 'now()',
                },
                {
                    name: 'updated_at',
                    type: 'timestamp',
                    default: 'now()',
                },
            ]
        }))

        await queryRunner.createForeignKey(
            'anniversaries',
            new TableForeignKey({
                name: 'anniversaryUser',
                columnNames: ['user_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'users',
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('anniversaries', 'anniversaryUser');
        await queryRunner.dropTable('anniversaries');
    }

}
