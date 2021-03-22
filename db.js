const brandDetails = {
    "description": "Brand Name of devices",
    "name": "devicebrandName",
    "subCategory": [
      {
        "name": "Apple",
      },
      {
        "name": "Samsung",
      },
      {
        "name": "Huawei",
      },
      {
        "name": "Lenovo",  
      },
      {
        "name": "Sony Ericsson",  
      },
      {
        "name": "ZTE",  
      },
      {
        "name": "Xiaomi",  
      },
      {
        "name": "Sony",  
      },
      {
        "name": "Nokia",  
      },
      {
        "name": "LG",  
      },
      {
        "name": "Hisense",  
      }
    ],
  }

  const modelDetails = {
    samsung :{ 
    brand : "Samsung",
    description : "model name of device",
    productSpecCharacteristic : [
        {
            name:"model",
            valueType:"string",
            productSpecCharacteristicsValue: [
               { value:"Galaxy Tab A 10.1 Back2School Bundle"}
            ]
        },
        {
            name:"model",
            valueType: "string",
            productSpecCharacteristicValue:[
                {
                    "value" : "SAMSUNG GALAXY A10 BLACK"
                }
            ]
        },
        {
          name:"model",
          valueType: "string",
          productSpecCharacteristicValue:[
              {
                  "value" : "SAMSUNG GALAXY A10 BLUE"
              }
          ]
      },
      {
        name:"model",
        valueType: "string",
        productSpecCharacteristicValue:[
            {
                "value" : "SAMSUNG GALAXY A10S BLACK"
            }
        ]
    },
    {
      name:"model",
      valueType: "string",
      productSpecCharacteristicValue:[
          {
              "value" : "SAMSUNG GALAXY A2 CORE BLACK"
          }
      ]
  },
  {
      name:"model",
      valueType: "string",
      productSpecCharacteristicValue:[
          {
              "value" : "SAMSUNG GALAXY A2 CORE BLUE"
          }
      ]
  },
  {
    name:"model",
    valueType: "string",
    productSpecCharacteristicValue:[
        {
            "value" : "SAMSUNG GALAXY A20 BLACK"
        }
    ]
},
{
  name:"model",
  valueType: "string",
  productSpecCharacteristicValue:[
      {
          "value" : "SAMSUNG GALAXY A20 BLUE"
      }
  ]
},
{
  name:"model",
  valueType: "string",
  productSpecCharacteristicValue:[
      {
          "value" : "SAMSUNG GALAXY A30 BLACK"
      }
  ]
},
{
  name:"model",
  valueType: "string",
  productSpecCharacteristicValue:[
      {
          "value" : "SAMSUNG GALAXY A30 BLUE"
      }
  ]
},
{
  name:"model",
  valueType: "string",
  productSpecCharacteristicValue:[
      {
          "value" : "SAMSUNG GALAXY A30 WHITE"
      }
  ]
}
    ]
  },
  apple :{ 
    brand : "Apple",
    description : "model name of device",
    productSpecCharacteristic : [
        {
            name:"model",
            valueType:"string",
            productSpecCharacteristicValue: [
               { value:"10.2 INCH IPAD WI-FI CELLULAR 128GB SPACE GREY"}
            ]
        },
        {
            name:"model",
            valueType: "string",
            productSpecCharacteristicValue:[
                {
                    "value" : "10.2 INCH IPAD WI-FI CELLULAR 32GB SPACE GREY"
                }
            ]
        },
        {
          name:"model",
          valueType: "string",
          productSpecCharacteristicValue:[
              {
                  "value" : "12.9-INCH iIPAD PRO WI-FI+ CELLULAR 256GB SPACE GREY"
              }
          ]
      },
      {
        name:"model",
        valueType: "string",
        productSpecCharacteristicValue:[
            {
                "value" : "12.9-INCH iIPAD PRO WI-FI+ CELLULAR 64GB SPACE GREY"
            }
        ]
    },
    {
      name:"model",
      valueType: "string",
      productSpecCharacteristicValue:[
          {
              "value" : "APPLE IPAD AIR (2019) 10.5\" WI-FI + CELLULAR 256GB SPACE GREY"
          }
      ]
  }
    ]
  }
}

module.exports = {brandDetails,modelDetails};