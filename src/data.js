export const API_KEY  = 'AIzaSyBMrOs6LeM7KOo0aIoH5fdvPOXGI2-sU6c'

export const value_converter = (value) =>{
    if(value >= 1000000){
        return Math.floor(value/1000000)+ "M";
    }
    else if(value >= 1000){
        return Math.floor(value/1000)+"K";
    }
    else{
        return value;
    }
}