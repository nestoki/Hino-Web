# -*- coding: utf-8 -*-
from odoo import models, fields, api, _
from odoo.exceptions import UserError, ValidationError

# import logging

# _logger = logging.getLogger(__name__)

class CamionGaleria(models.Model):
    _name = 'camion.galeria'
    _description = 'Modelo para almacenar imágenes de la galería de los camiones'

    camion_id = fields.Many2one('camion', string='Camión')
    image_name = fields.Char(string='Nombre de la Imagen')
    image_data = fields.Binary(string='Imagen')
    
class SeriesSlider(models.Model):
    _name = 'series.slider'
    _description = 'Modelo para almacenar imágenes del Slider de Series'

    serie_id = fields.Many2one('series', string='Serie')
    image_name_serie = fields.Char(string='Nombre de la Imagen')
    image_data_serie = fields.Binary(string='Imagen')
    
class SeriesSliderResponsive(models.Model):
    _name = 'series.responsive'
    _description = 'Modelo para almacenar imágenes responsive del Slider de Series'

    responsive_id = fields.Many2one('series', string='Serie')
    image_name_responsive = fields.Char(string='Nombre de la Imagen')
    image_data_responsive = fields.Binary(string='Imagen')


class EcoGaleria(models.Model):
    _name = 'eco.galeria'
    _description = 'Modelo para almacenar imágenes de la galería de la seccion Eco Safety Drive'

    eco_id = fields.Many2one('eco.safety', string='Eco Safety')
    image_eco_data = fields.Binary(string='Imagen')

class CustomerGaleria(models.Model):
    _name = 'customer.galeria'
    _description = 'Modelo para almacenar imágenes de la galería de la seccion Customer Care Clinic'

    customer_id = fields.Many2one('customer.care', string='Customer Care Clinic')
    image_customer_data = fields.Binary(string='Imagen')
    
class RepuestosGaleria(models.Model):
    _name = 'repuestos.galeria'
    _description = 'Modelo para almacenar imágenes de la galería de la seccion Repuestos'

    repuestos_id = fields.Many2one('repuestos', string='Repuestos')
    image_repuestos_data = fields.Binary(string='Imagen')
