# -*- coding: utf-8 -*-

from odoo import models, fields,api,_
from datetime import datetime
from odoo.exceptions import ValidationError
# import logging

# _logger = logging.getLogger(__name__)

class Novedades(models.Model):
    _name = 'novedades'
    _description = 'Modelo para registrar las novedades(noticias)'
    _rec_name = 'titulo'

    titulo = fields.Char(string='Título')
    fecha = fields.Date(string='Fecha')
    imagen = fields.Binary(string='Imagen')
    descripcion = fields.Text(string='Descripción')
    informacion = fields.Html(string='Información')
    creado_por = fields.Char(string='Creado por')

    #obteniendo las novedades
    next_novedad = fields.Many2one('novedades', string='Siguiente Novedad', compute='_compute_next_novedad')
    prev_novedad = fields.Many2one('novedades', string='Novedad Anterior', compute='_compute_prev_novedad')

    #Validar que la fecha sea obligatoria 
    @api.constrains('fecha')
    def _check_fecha_required_and_not_future(self):
        for record in self:
            if not record.fecha:
                raise ValidationError(_("El campo Fecha es obligatorio."))
            elif record.fecha > datetime.now().date():
                raise ValidationError(_("La fecha no puede ser mayor a la fecha actual."))
            
    @api.depends('fecha')
    def _compute_next_novedad(self):
        for record in self:
            next_novedad = self.search([('fecha', '>', record.fecha)], order='fecha asc', limit=1)
            record.next_novedad = next_novedad

    @api.depends('fecha')
    def _compute_prev_novedad(self):
        for record in self:
            prev_novedad = self.search([('fecha', '<', record.fecha)], order='fecha desc', limit=1)
            record.prev_novedad = prev_novedad