////////////////////////////////////////////////////////////////////////
// unityjs.js
// Don Hopkins, Ground Up Software.


////////////////////////////////////////////////////////////////////////


var gSheetsIndex = null;


////////////////////////////////////////////////////////////////////////


function CreateUnityJSInitial()
{
    console.log("unityjs.js: CreateUnityJSInitial");
}


function CreateUnityJS()
{
    console.log("unityjs.js: CreateUnityJS");

    bridge.createPlace();

    bridge.world.ball = bridge.createObject({
        prefab: 'Prefabs/Ball', 
        update: {
            'transform/localPosition': {x: 0, y: 5, z: 0},
            'transform/localScale': {x: 5, y: 5, z: 5}
        },
    });

}


////////////////////////////////////////////////////////////////////////
