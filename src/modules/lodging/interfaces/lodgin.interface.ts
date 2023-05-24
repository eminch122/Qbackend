 interface Lodgings {
    name: string, 
    metadata: LodgingMetadata 
    services: Services 
    foodAndDrink: foodAndDrink 
    policies: policies 
    wellness: wellness 
    transportation: transportation 
    families: families 
    parking: parking 
    housekeeping: housekeeping 
    pools: pools 
    activities: activities 
    connectivity: connectivity 
    business: business
}

 enum Exception{
    EXCEPTION_UNSPECIFIED='EXCEPTION_UNSPECIFIED',
    UNDER_CONSTRUCTION='UNDER_CONSTRUCTION',
    DEPENDENT_ON_SEASON='DEPENDENT_ON_SEASON',
    DEPENDENT_ON_DAY_OF_WEEK='DEPENDENT_ON_DAY_OF_WEEK'
}

 interface LodgingMetadata{
    updateTime: string
}

 interface Services{
    languagesSpoken : LanguagesSpoken[] | null,

    frontDesk: boolean | null,
    frontDeskException?: Exception

    twentyFourHourFrontDesk: boolean | null,
    twentyFourHourFrontDeskException?: Exception

    concierge: boolean | null,
    conciergeException?: Exception
    
    elevator: boolean | null,
    elevatorException?: Exception

    baggageStorage: boolean | null,
    baggageStorageException?: Exception

    fullServiceLaundry: boolean | null,
    fullServiceLaundryException?: Exception

    selfServiceLaundry: boolean | null,
    selfServiceLaundryException?: Exception

    socialHour: boolean | null,
    socialHourException?: Exception
    
    convenienceStore: boolean | null,
    convenienceStoreException?: Exception

    giftShop: boolean | null,
    giftShopException?: Exception

    wakeUpCalls: boolean | null,
    wakeUpCallsException?: Exception

    currencyExchange: boolean | null,
    currencyExchangeException?: Exception


}
 interface LanguagesSpoken{
    languageCode: string,
    spoken: boolean,
    spokenException?: Exception
}
 interface foodAndDrink{
    roomService: boolean,
    roomServiceException?: Exception

    twentyFourHourRoomService: boolean,
    twentyFourHourRoomServiceException?: Exception

    restaurant:boolean,
    restaurantException?: Exception

    restaurantsCount: number,
    restaurantsCountException?: Exception

    tableService: boolean,
    tableServiceException?: Exception

    buffet: boolean,
    buffetException?: Exception

    freeBreakfast: boolean,
    freeBreakfastException?: Exception

    bar: boolean,
    barException?: Exception
}

 interface policies{
    
}

 interface wellness{
    
}

 interface transportation{
    
}

 interface families{
    babysitting?: boolean | null;
    /**
     * Babysitting exception.
     */
    babysittingException?: string | null;
    /**
     * Kids activities. Recreational options such as sports, films, crafts and games designed for the enjoyment of children and offered at the hotel. May or may not be supervised. May or may not be at a designated time or place. Cab be free or for a fee.
     */
    kidsActivities?: boolean | null;
    /**
     * Kids activities exception.
     */
    kidsActivitiesException?: string | null;
    /**
     * Kids club. An organized program of group activities held at the hotel and designed for the enjoyment of children. Facilitated by hotel staff (or staff procured by the hotel) in an area(s) designated for the purpose of entertaining children without their parents. May include games, outings, water sports, team sports, arts and crafts, and films. Usually has set hours. Can be free or for a fee. Also known as Kids Camp or Kids program.
     */
    kidsClub?: boolean | null;
    /**
     * Kids club exception.
     */
    kidsClubException?: string | null;
    /**
     * Kids friendly. The hotel has one or more special features for families with children, such as reduced rates, child-sized beds, kids' club, babysitting service, or suitable place to play on premises.
     */
    kidsFriendly?: boolean | null;
    /**
     * Kids friendly exception.
     */
    kidsFriendlyException?: string | null;
    
}


 interface parking{
    
}

 interface housekeeping{
    
}

 interface pools{
    
}


 interface activities{
    
}

 interface connectivity{
    
}

 interface business{
    
}
