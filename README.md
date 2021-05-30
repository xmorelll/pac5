# Ejercicio 1:

Lighthouse:

Despues de ver el informe generado por lighthouse destacar:

* Desktop:
  * Performance 99
  * Accessibility 93
  * Best Practices 93
  * SEO 89
  
* Mobile
  * Performance 73
  * Accessibility 93
  * Best Practices 93
  * SEO 91


Para la configuración del service worker se ha usado la misma configuración del ejercicio de la teoria. Seguramente seria bueno aumentar el tiempo de cache, ya que no se esperan muchos cambios en la información de la pagina, y aunque cambien mostrar la version anterior no seria un error. Me refiero a que la pagina web no muestra valores de criptomonedas donde es importante tener la información actualizada. Al tratarse de información sobre margaritas, si un usuario sin internet ve una versión previa pues no seria un gran problema, ya que seguro que también es valida aunque no este actualizada a la ultima versión.




Al configurar Angular Universal usando un schematics, se han creado 3 documentos:

* src/main.server.ts:
* src/app/app.server.module.ts:
* server.ts:
