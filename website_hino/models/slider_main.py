# -*- coding: utf-8 -*-

from odoo import models, fields, api, _
from odoo.exceptions import UserError, ValidationError
# import logging

# _logger = logging.getLogger(__name__)


class SliderMain(models.Model):
    _name = 'slider.main'
    _description = 'Modelo para registrar la informacion del slider principal'
    _sql_constraints = [
        ('uniq_name', 'unique(name)', '¡Ya existe un slider con el mismo nombre!'),
    ]
    name = fields.Char(string='Título')
    foto = fields.Binary(string='Foto')
    foto_responsive = fields.Binary(string='Foto Responsive')
    descripcion = fields.Text(string='Descripción')
    button_text = fields.Char(string='Texto del Botón')
    button_url = fields.Char(string='URL del Botón')

























    # foto_url = fields.Char(compute='_compute_foto_url', store=False)

    # @api.depends('foto')
    # def _compute_foto_url(self):
    #     for record in self:
    #         if record.foto:
    #             record.foto_url = '/web/image?model=slider.main&field=foto&id=%s' % record.id
    #         else:
    #             record.foto_url = False
