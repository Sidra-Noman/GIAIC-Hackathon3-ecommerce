export interface Product{
    _id : string;
    productName : string;
    _type : "product";
    image? : {
        asset:{
            _ref : string;
            _type : "image";

        }
    };
    price : number;
    description? : String;
    slug : {
        _type :"slug";
        current :string;
    };
    inventory : number;


}