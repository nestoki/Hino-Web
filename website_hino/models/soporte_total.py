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
    soporte_url = fields.Selection([
        ('/soporte-total/servicios', 'Servicios'),
        ('/soporte-total/repuestos', 'Repuestos'),
        ('/soporte-total/mantenimiento-prepagado', 'Mantenimiento Prepagado'),
        ('/soporte-total/free-service-program', 'Free Service Program'),
        ('/soporte-total/eco-and-safety-drive', 'Eco & Safety Drive'),
        ('/soporte-total/customer-care-clinics', 'Customer Care Clinics'),
    ], string='URL del Tipo de Servicio')

    