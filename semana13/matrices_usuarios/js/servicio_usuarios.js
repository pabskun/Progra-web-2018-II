'use strict';


const obtenerListaUsuarios = () =>{
    let mListaUsuarios = JSON.parse(localStorage.getItem('listaUsuariosLS'));
    if(mListaUsuarios == null){
        mListaUsuarios = [
            ['113424455', 'Javier Meendez', 'javier@gmail.com',21, ''],
            ['123459988', 'Gustavo Rivera', 'gustavo@gmail.com',34, ''],
            ['111243319', 'Carla Fonseca', 'carla@gmail.com',17, '']
        ];
    }

    return mListaUsuarios;
};

const registrarUsuario = (paNuevoUsuario) =>{
    let mListaUsuarios = obtenerListaUsuarios();

    mListaUsuarios.push(paNuevoUsuario);

    localStorage.setItem('listaUsuariosLS', JSON.stringify(mListaUsuarios));
}; 

const buscarUsuarioPorCedula = (pCedula) =>{
    let mListaUsuarios = obtenerListaUsuarios();
    let usuarioEncontrado = [];
    for(let i = 0; i < mListaUsuarios.length; i++ ){
        if(mListaUsuarios[i][0] == pCedula){
            usuarioEncontrado = mListaUsuarios[i];
        }
    };
    return usuarioEncontrado;
};

// pUsuarioModificado -> arreglo
const modificarUsuario = (pUsuarioModificado) =>{
    let mListaUsuarios = obtenerListaUsuarios();
    for(let i = 0 ; i < mListaUsuarios.length; i++ ){
        if(mListaUsuarios[i][0] == pUsuarioModificado[0]){
            mListaUsuarios[i] = pUsuarioModificado;
        }
    }
    localStorage.setItem('listaUsuariosLS', JSON.stringify(mListaUsuarios));

};