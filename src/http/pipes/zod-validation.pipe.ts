import { PipeTransform, ArgumentMetadata, BadRequestException } from '@nestjs/common';
import { ZodError, ZodSchema } from 'zod';

export class ZodValidationPipe implements PipeTransform{
    constructor(
        private zodSchema: ZodSchema
    ){}

    public transform(value: unknown, metadata: ArgumentMetadata) {
        try {
            if(metadata.type == "body"){
                const parsedValues = this.zodSchema.parse(value);
                return parsedValues;
            }else{
                return value;
            }
        } catch (error) {
            if(error instanceof ZodError){
                throw new BadRequestException(error.issues);
            }
            throw new BadRequestException("Invalid data provided");
        }
    }
}