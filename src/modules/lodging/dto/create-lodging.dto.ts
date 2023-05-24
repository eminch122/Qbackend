
export class CreateLodgingDto {
    frontDesk(frontDesk: any) {
      throw new Error("Method not implemented.");
    }

    readonly name: string;
    readonly metadata: LodgingMetadata;
    readonly services: Services;
    readonly foodAndDrink: foodAndDrink;
    readonly policies: policies 
    readonly wellness: wellness 
    readonly transportation: transportation 
    readonly families: families 
    readonly parking: parking 
    readonly housekeeping: housekeeping 
    readonly pools: pools 
    readonly activities: activities 
    readonly connectivity: connectivity 
    readonly business: business
}
    
  
  