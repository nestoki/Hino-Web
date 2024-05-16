# -*- coding: utf-8 -*-

from odoo import models, fields, api, _
from odoo.exceptions import UserError, ValidationError
import re
# import logging

# _logger = logging.getLogger(__name__)


class InfoContacto(models.Model):
    _name = 'info.contacto'
    _description = 'Modelo para registrar la informacion de contacto'
    _sql_constraints = [
        ('uniq_name', 'unique(name)', '¡Ya existe una informacion de contacto con el mismo nombre!'),
    ]
    
    name = fields.Char(string='Título')

    numero_phone = fields.Char(string='Telefono')
    whatsapp = fields.Char(string='Número de Whatsapp')
    email = fields.Text(string='Email')
    instagram = fields.Text(string='Instagram')
    youtube = fields.Text(string='Youtube')
    linkedin = fields.Text(string='Linkedin')
    direccion = fields.Text(string='Dirección')
    
    #Validacion para el correo electronico
    @api.constrains('email')
    def _check_email(self):
        for record in self:
            # Solo se realiza la validación si el campo correo_electronico no está vacío
            if record.email:
                pattern = r"^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$"
                if not re.match(pattern, record.email):
                    raise ValidationError(_("El formato del Correo Electrónico es inválido."))
