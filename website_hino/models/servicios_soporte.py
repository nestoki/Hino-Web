# -*- coding: utf-8 -*-

from odoo import models, fields, api, _
from odoo.exceptions import UserError, ValidationError
# import logging

# _logger = logging.getLogger(__name__)


class ServiciosSoporte(models.Model):
    _name = 'servicios.soporte'
    _description = 'Modelo para registrar las diferentes opciones de Servicio Soporte'
    _rec_name = 'text_slider' 
    
    cita_whatsapp = fields.Char(string='Cita en Whatsapp')
    text_slider = fields.Text(string='Título')
    