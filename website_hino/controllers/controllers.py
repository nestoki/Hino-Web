from odoo import http
#Controller para renderizar la seccion de Camiones

class CamionesController(http.Controller):
    #Ruta para Camiones General
    @http.route('/camiones/series', type='http', auth='public', website=True)
    def camiones(self, **kw):
        # Obtener el ID del camión de los parámetros de la URL
        camion_id = http.request.httprequest.args.get('camionId')
        
        # Comprobar si se proporcionó un ID de camión en la URL
        if camion_id:
            # Buscar el camión en la base de datos por su ID
            camion = http.request.env['camion'].sudo().search([('id', '=', camion_id)])
            if camion:
                # Si se encuentra un camión con el ID proporcionado, obtener su serie y renderizar la plantilla
                serie_camion = camion.no_serie
                return http.request.render('website_hino.hino_camiones', {'camion': camion, 'serie_camion': serie_camion})
        
        # Si no se proporciona ningún ID de camión, buscar el 1er camión
        camion = http.request.env['camion'].sudo().search([], limit=1)
        if camion:
            # Si se encuentra un camión , obtener su serie y renderizar la plantilla
            serie_camion = camion.no_serie
            return http.request.render('website_hino.hino_camiones', {'camion': camion, 'serie_camion': serie_camion})

    #Rutas para las Serie 200
    @http.route('/camiones/series/serie-200', type='http', auth='public', website=True)
    def camiones_serie_200(self, **kw):
        # Obtener el ID del camión de los parámetros de la URL
        camion_id = http.request.httprequest.args.get('camionId')
        
        # Comprobar si se proporcionó un ID de camión en la URL
        if camion_id:
            # Buscar el camión en la base de datos por su ID
            camion = http.request.env['camion'].sudo().search([('id', '=', camion_id)])
            if camion:
                # Si se encuentra un camión con el ID proporcionado, obtener su serie y renderizar la plantilla
                serie_camion = camion.no_serie
                return http.request.render('website_hino.hino_camiones', {'camion': camion, 'serie_camion': serie_camion})

        # Si no se proporciona ningún ID de camión, buscar el 1er camión de la serie 200
        camion = http.request.env['camion'].sudo().search([('no_serie','=','200')], limit=1)
        if camion:
            # Si se encuentra un camión , obtener su serie y renderizar la plantilla
            serie_camion = camion.no_serie
            return http.request.render('website_hino.hino_camiones', {'camion': camion, 'serie_camion': serie_camion})

    #Rutas para las Serie 300
    @http.route('/camiones/series/serie-300', type='http', auth='public', website=True)
    def camiones_serie_300(self, **kw):
        # Obtener el ID del camión de los parámetros de la URL
        camion_id = http.request.httprequest.args.get('camionId')
        
        # Comprobar si se proporcionó un ID de camión en la URL
        if camion_id:
            # Buscar el camión en la base de datos por su ID
            camion = http.request.env['camion'].sudo().search([('id', '=', camion_id)])
            if camion:
                # Si se encuentra un camión con el ID proporcionado, obtener su serie y renderizar la plantilla
                serie_camion = camion.no_serie
                return http.request.render('website_hino.hino_camiones', {'camion': camion, 'serie_camion': serie_camion})

        # Si no se proporciona ningún ID de camión, buscar el 1er camión de la serie 300
        camion = http.request.env['camion'].sudo().search([('no_serie','=','300')], limit=1)
        if camion:
            # Si se encuentra un camión , obtener su serie y renderizar la plantilla
            serie_camion = camion.no_serie
            return http.request.render('website_hino.hino_camiones', {'camion': camion, 'serie_camion': serie_camion})

    #Rutas para las Serie 500
    @http.route('/camiones/series/serie-500', type='http', auth='public', website=True)
    def camiones_serie_500(self, **kw):
        # Obtener el ID del camión de los parámetros de la URL
        camion_id = http.request.httprequest.args.get('camionId')
        
        # Comprobar si se proporcionó un ID de camión en la URL
        if camion_id:
            # Buscar el camión en la base de datos por su ID
            camion = http.request.env['camion'].sudo().search([('id', '=', camion_id)])
            if camion:
                # Si se encuentra un camión con el ID proporcionado, obtener su serie y renderizar la plantilla
                serie_camion = camion.no_serie
                return http.request.render('website_hino.hino_camiones', {'camion': camion, 'serie_camion': serie_camion})

        # Si no se proporciona ningún ID de camión, buscar el 1er camión de la serie 500
        camion = http.request.env['camion'].sudo().search([('no_serie','=','500')], limit=1)
        if camion:
            # Si se encuentra un camión , obtener su serie y renderizar la plantilla
            serie_camion = camion.no_serie
            return http.request.render('website_hino.hino_camiones', {'camion': camion, 'serie_camion': serie_camion})

    #Rutas para las Serie 700
    @http.route('/camiones/series/serie-700', type='http', auth='public', website=True)
    def camiones_serie_700(self, **kw):
        # Obtener el ID del camión de los parámetros de la URL
        camion_id = http.request.httprequest.args.get('camionId')
        
        # Comprobar si se proporcionó un ID de camión en la URL
        if camion_id:
            # Buscar el camión en la base de datos por su ID
            camion = http.request.env['camion'].sudo().search([('id', '=', camion_id)])
            if camion:
                # Si se encuentra un camión con el ID proporcionado, obtener su serie y renderizar la plantilla
                serie_camion = camion.no_serie
                return http.request.render('website_hino.hino_camiones', {'camion': camion, 'serie_camion': serie_camion})

        # Si no se proporciona ningún ID de camión, buscar el 1er camión de la serie 700
        camion = http.request.env['camion'].sudo().search([('no_serie','=','700')], limit=1)
        if camion:
            # Si se encuentra un camión , obtener su serie y renderizar la plantilla
            serie_camion = camion.no_serie
            return http.request.render('website_hino.hino_camiones', {'camion': camion, 'serie_camion': serie_camion})
    
#Controller para renderizar la seccion de Series
class SeriesController(http.Controller):
    #Rutas para las Serie 200
    @http.route('/camiones/series-200', auth='public', website=True)
    def serie_200(self, **kw):
        # Buscar el primer camión y serie de la serie 200
        camion = http.request.env['camion'].sudo().search([('no_serie', '=', '200')], limit=1)
        serie = http.request.env['series'].sudo().search([('no_serie', '=', '200')], limit=1)
        
        if camion:
            serie_camion = camion.no_serie
        else:
            serie_camion = None
            
        if serie:
            serie_series = serie.no_serie
        else:
            serie_series = None
        
        return http.request.render('website_hino.hino_series', {'camion': camion,'serie_camion': serie_camion,'serie_series': serie_series})
                
    #Rutas para las Serie 300
    @http.route('/camiones/series-300', auth='public', website=True)
    def serie_300(self, **kw):
        # Buscar el primer camión y serie de la serie 300
        camion = http.request.env['camion'].sudo().search([('no_serie', '=', '300')], limit=1)
        serie = http.request.env['series'].sudo().search([('no_serie', '=', '300')], limit=1)
        
        if camion:
            serie_camion = camion.no_serie
        else:
            serie_camion = None
            
        if serie:
            serie_series = serie.no_serie
        else:
            serie_series = None
        
        return http.request.render('website_hino.hino_series', {'camion': camion,'serie_camion': serie_camion,'serie_series': serie_series})

    #Rutas para las Serie 500
    @http.route('/camiones/series-500', auth='public', website=True)
    def serie_500(self, **kw):
        # Buscar el primer camión y serie de la serie 500
        camion = http.request.env['camion'].sudo().search([('no_serie', '=', '500')], limit=1)
        serie = http.request.env['series'].sudo().search([('no_serie', '=', '500')], limit=1)
        
        if camion:
            serie_camion = camion.no_serie
        else:
            serie_camion = None
            
        if serie:
            serie_series = serie.no_serie
        else:
            serie_series = None
        
        return http.request.render('website_hino.hino_series', {'camion': camion,'serie_camion': serie_camion,'serie_series': serie_series})

    #Rutas para las Serie 700
    @http.route('/camiones/series-700', auth='public', website=True)
    def serie_700(self, **kw):
        # Buscar el primer camión y serie de la serie 700
        camion = http.request.env['camion'].sudo().search([('no_serie', '=', '700')], limit=1)
        serie = http.request.env['series'].sudo().search([('no_serie', '=', '700')], limit=1)
        
        if camion:
            serie_camion = camion.no_serie
        else:
            serie_camion = None
            
        if serie:
            serie_series = serie.no_serie
        else:
            serie_series = None
        
        return http.request.render('website_hino.hino_series', {'camion': camion,'serie_camion': serie_camion,'serie_series': serie_series})


#Controller para renderizar la seccion de Nosotros
class NosotrosController(http.Controller):

    @http.route('/nosotros/hino', auth='public', website=True)
    def nosotros_hino(self, **kw):
        return http.request.render('website_hino.hino_nosotros_hino')
    
    @http.route('/nosotros/tambor', auth='public', website=True)
    def nosotros_tambor(self, **kw):
        return http.request.render('website_hino.hino_nosotros_tambor')

#Controller para renderizar la seccion de Postventa
class PostventaController(http.Controller):

    @http.route('/postventa', auth='public', website=True)
    def postventa(self, **kw):
        return http.request.render('website_hino.hino_postventa')

#Controller para renderizar la seccion de Soporte Total
class SoporteTotalController(http.Controller):

    @http.route('/soporte-total/servicios', auth='public', website=True)
    def servicios(self, **kw):
        return http.request.render('website_hino.hino_servicios')

    @http.route('/soporte-total/respuestos', auth='public', website=True)
    def respuestos(self, **kw):
        return http.request.render('website_hino.hino_respuestos')


    @http.route('/soporte-total/mantenimiento-prepagado', auth='public', website=True)
    def mantenimiento_prepagado(self, **kw):
        return http.request.render('website_hino.hino_mantenimiento_prepagado')

    @http.route('/soporte-total/customer-care-clinics', auth='public', website=True)
    def customer_care_clinics(self, **kw):
        return http.request.render('website_hino.hino_customer_care_clinics')

    @http.route('/soporte-total/eco-and-safety-drive', auth='public', website=True)
    def eco_safety_drive(self, **kw):
        return http.request.render('website_hino.hino_eco_safety_drive')

    @http.route('/soporte-total/free-service-program', auth='public', website=True)
    def free_service_program(self, **kw):
        return http.request.render('website_hino.hino_free_service_program')
        

#Controller para renderizar la seccion de Novedades
class NovedadesController(http.Controller):

    @http.route('/novedades', auth='public', website=True)
    def novedades(self, **kw):
        return http.request.render('website_hino.hino_novedades')

    @http.route('/novedades/news', auth='public', website=True)
    def novedades_news(self, **kw):
        # Obtener el ID de la novedad de los parámetros de la URL
        novedad_id = http.request.httprequest.args.get('novedadId')
        
        # Comprobar si se proporcionó un ID de novedad en la URL
        if novedad_id:
            # Buscar la novedad en la base de datos por su ID
            novedad = http.request.env['novedades'].sudo().search([('id', '=', novedad_id)])
            if novedad:
                # Si se encuentra la novedad con el ID proporcionado, renderizar la plantilla con los detalles de la novedad
                return http.request.render('website_hino.hino_novedades_news', {'novedad': novedad})
        
        # Si no se proporciona ningún ID de novedad, puedes manejarlo de la manera que prefieras, aquí solo redirigiré a una página de error
        return http.request.render('website_hino.error_404')





#Controller para renderizar la seccion de Sucursales
class SucursalesController(http.Controller):
    
    @http.route('/sucursales', type='http', auth='public', website=True)
    def sucursales(self):
        sucursales = http.request.env['sucursales'].sudo().search([])
        return http.request.render('website_hino.hino_sucursales', {'sucursales': sucursales})


#Controller para renderizar la seccion de Contactenos
class ContactenosController(http.Controller):

    @http.route('/contactus', auth='public', website=True)
    def contactenos(self, **kw):
        return http.request.render('website_hino.hino_contactenos')
