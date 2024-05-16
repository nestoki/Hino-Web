# -*- coding: utf-8 -*-

from odoo import models, fields, api, _
from odoo.exceptions import UserError, ValidationError
# import logging

# _logger = logging.getLogger(__name__)


class SoporteTotal(models.Model):
    _name = 'soporte.total'
    _description = 'Modelo para registrar las diferentes opciones de soporte'
    _sql_constraints = [
        ('uniq_name', 'unique(name)', '¡Ya existe un soporte con el mismo nombre!'),
    ]

    name = fields.Char(string='Nombre')
    imagen = fields.Binary(string='Imagen')
    descripcion = fields.Char(string='Descripción')
    informacion = fields.Text(string='Información')
    soporte_url = fields.Char(string='URL del Tipo de Servicio')

    