import { DynamicModule, Module } from '@nestjs/common';
import { MongoModule } from './mongo/mongo.module';

interface DatabaseOptions {
    type: 'prisma' | 'mongoose';
    global?: boolean;
}

@Module({})
export class PersistenceModule {
    static async register({ global = true, type }: DatabaseOptions): Promise<DynamicModule> {
        return {
            global,
            module: PersistenceModule,
            imports: [type === 'mongoose' ? MongoModule : null],
            exports: [type === 'mongoose' ? MongoModule : null],
        };
    };
}
