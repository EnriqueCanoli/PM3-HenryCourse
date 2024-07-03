<a name="br1"></a> 

**User stories (**Restaurante **)**

Como usuario invitado:

●

●

Debo poder navegar en la aplicación (navbar)

Debo poder visualizar los productos/servicios que ofrece la aplicación (Nacional,

internacional, primera clase)

●

●

●

●

Debo poder visualizar a detalle el servicio (Opcional)

Debo poder registrarme

Debo poder loguearme

Debo poder visualizar en about us, contact us

Como usuario registrado:

●

●

●

●

●

●

Debo poder agendar un turno

Debo poder cancelar un turno

Debo poder visualizar el historial de turnos

Debo poder cerrar sesión

Debo poder recuperar mis credenciales

Debo poder editar el perfil del usuario (opcional)

***Entidades***

●

Credentials

○

id

○

○

username

password

●

Service

○

○

○

○

○

○

id

name

description

price

duration

isActive

●

Appointment

○

○

id

date

○

time

○

seat

○

status

○

○

User -> Appointment N:1 User

Service -> Appointment 1:1 service

●

User

○

id

○

Nombre

○

email

○

birthdate

○

phoneNumber

○

photo

○

○

Appointments -> User 1: N Appointment

Credential -> User 1:1 Credential



<a name="br2"></a> 

