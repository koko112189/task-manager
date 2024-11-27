Administración de Tareas (Prueba técnica frontend Accenture)
Esta es una aplicación híbrida desarrollada con Angular e Ionic, que permite a los usuarios gestionar sus tareas, asignarles categorías y filtrarlas. La aplicación también está optimizada para dispositivos móviles y puede compilarse para Android e iOS.

Características
Gestión de Tareas:

Añadir nuevas tareas.
Marcar tareas como completadas.
Eliminar tareas existentes.

Categorías:
Crear, eliminar categorías.
Asignar categorías a las tareas.
Filtrar tareas por categoría.

Almacenamiento Local:
Persistencia de datos mediante LocalStorage.

Soporte Híbrido:
Preparada para compilarse en Android e iOS.


Arquitectura Limpia:
Separación en capas core, data, domain y presentation para un mantenimiento y escalabilidad óptimos.

Instalación y Ejecución Local

Requisitos Previos
Node.js (v16 o superior)
Angular CLI (npm install -g @angular/cli)
Capacitor CLI (npm install -g @capacitor/cli)
Ionic CLI (npm install -g @ionic/cli)

Clonar el repositorio:

'''bash
git clone https://github.com/koko112189/task-manager.git
cd task-manager


Instalar las dependencias:

'''bash
npm install

Ejecutar la aplicación localmente en el navegador:
'''bash
ionic serve

Compilación para Android e iOS

Configuración de Capacitor

Agregar plataformas de Android e iOS:
'''bash
ionic capacitor add android
ionic capacitor add ios

Sincronizar cambios:
'''bash
ionic capacitor sync

Abrir en Android Studio o Xcode:
Android:
'''bash
ionic capacitor open android

iOS:
'''bash
ionic capacitor open ios

Generar APK (Android)
Configurar una keystore si es necesario para la firma del APK.
Construir el APK desde Android Studio:
Seleccionar Build > Build Bundle(s) / APK(s) > Build APK(s).

Generar IPA (iOS)
Configurar un perfil de desarrollo en Xcode.
Construir el IPA desde Xcode.

Firebase y Remote Config
La aplicación está integrada con Firebase para gestionar configuraciones remotas y habilitar/deshabilitar funcionalidades mediante feature flags. Sigue los pasos a continuación para configurar Firebase:

Crear un proyecto en Firebase.
Descargar el archivo google-services.json para Android y GoogleService-Info.plist para iOS.
Colocar estos archivos en las carpetas correspondientes:

android/app para Android.
ios/App para iOS.

Habilitar Remote Config desde la consola de Firebase.
Personalizar las configuraciones remotas para activar/desactivar características.

Optimización de Rendimiento
Carga Inicial:
Lazy loading para módulos y componentes.
Minificación y eliminación de código muerto en producción.

Manejo de Grandes Cantidades de Tareas:
Uso eficiente de RxJS y pipes asíncronos.

Minimización de Uso de Memoria:
Liberar suscripciones innecesarias.
Optimización de bindings y detección de cambios.




Autor
Desarrollado por John Upegui Acevedo
