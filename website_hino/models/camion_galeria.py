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
    # image_url = fields.Char(compute='_compute_image_url', store=False)

    # @api.depends('image_data')
    # def _compute_image_url(self):
    #     for record in self:
    #         if record.image_data:
    #             record.image_url = '/web/image?model=camion.galeria&field=image_data&id=%s' % record.id
    #         else:
    #             record.image_url = False
