# -*- coding: utf-8 -*-
import logging

from odoo import models, fields, api, _
from odoo.exceptions import UserError, ValidationError

_logger = logging.getLogger(__name__)


class Repuestos(models.Model):
    _name = 'repuestos'
    _description = 'Repuestos'

    name = fields.Char('Nombre')

    galeria_repuestos_ids = fields.One2many('repuestos.galeria', 'repuestos_id', string='Galería')