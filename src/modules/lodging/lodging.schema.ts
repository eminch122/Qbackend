import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";


@Schema()
export class Lodging {
    
    @Prop()
    name: string;

    @Prop({ type: Object })
    metadata: LodgingMetadata;

    @Prop({ type: Object })
    services: Services;

    @Prop({ type: Object })
    foodAndDrink: foodAndDrink;

    @Prop({ type: Object })
    policies: policies;

    @Prop({ type: Object })
    wellness: wellness;

    @Prop({ type: Object })
    transportation: transportation;

    @Prop({ type: Object })
    families: families;

    @Prop({ type: Object })
    parking: parking;

    @Prop({ type: Object })
    housekeeping: housekeeping;

    @Prop({ type: Object })
    pools: pools;

    @Prop({ type: Object })
    activities: activities;

    @Prop({ type: Object })
    connectivity: connectivity;

    @Prop({ type: Object })
    business: business;
}

export const LodgingSchema = SchemaFactory.createForClass(Lodging);