'use strict';


const obtenerListaUsuarios = () =>{
    let mListaUsuarios = JSON.parse(localStorage.getItem('listaUsuariosLS'));
    if(mListaUsuarios == null){
        mListaUsuarios = [
            ['113424455', 'Javier Meendez', 'javier@gmail.com', ''],
            ['123459988', 'Gustavo Rivera', 'gustavo@gmail.com', ''],
            ['111243319', 'Carla Fonseca', 'carla@gmail.com', '']
        ];
    }

    return mListaUsuarios;
};

const registrarUsuario = (paNuevoUsuario) =>{
    let mListaUsuarios = obtenerListaUsuarios();

    mListaUsuarios.push(paNuevoUsuario);

    localStorage.setItem('listaUsuariosLS', JSON.stringify(mListaUsuarios));
}; 