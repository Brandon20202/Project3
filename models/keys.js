module.exports= function(sequalize, DataTypes){
    var Keys = sequalize.define("Keys",{

        REACT_APP_CLIENT_ID: {
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
                len:[1]
            }
        },
        REACT_APP_CLIENT_SECRET:{
            type: DataTypes.STRING,
            allowNull:false,
            validate:{
                len:[1]
            }
        },
        REACT_APP_ACCESS_TOKEN:{
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
                len:[1]
            }
        }

    });

    return Keys;
};