import { IMyDateModel } from 'angular-mydatepicker';

export class CreateDisplayRequest {
    distance: string;
    closingTime: any;
    closingPlace: string;
    reportingtime: any;
    vehicleNo: any;
    vehicleStayArea: string;
    createdAt: any;
    display: Display[];
    districtAreaName: '';
    districtName: '';
    generalHourPictureName: '';
    id: 0;
    kilometerPictureName: '';
    reportDate: '';
    status: '';
    updatedAt: '';
}

export class VehicleNo {
    id: number;
    name: string;
}
export class Display {
    displayArea: '';
    displayPictureName: '';
    displayTimingFrom: '';
    displayTimingTo: '';
    peopleViewed: '';
}
