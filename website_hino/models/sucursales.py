# -*- coding: utf-8 -*-
from odoo import models, fields, api, _
from odoo.exceptions import UserError, ValidationError
import re


class Sucursales(models.Model):
    _name = "sucursales"
    _description = "Modelo para registrar la informacion de las Sucursales"

    name = fields.Char(string="Nombre de la Sucursal")
    direccion = fields.Char(string="Dirección")
    numero_phone = fields.Char(string='Telefono')
    cita = fields.Char(string='Cita')
    horarios = fields.Char(string="Horario")

    google_maps_direct = fields.Text(string='Google Maps en el Navegador')
    google_maps = fields.Text(string='Google Maps Embebida')
    waze = fields.Text(string='Waze')

    google_maps_url = fields.Char(compute='_compute_google_maps_url')

    @api.depends('google_maps')
    def _compute_google_maps_url(self):
        for record in self:
            if record.google_maps:
                # Verifica si la entrada es un iframe
                iframe_match = re.search(
                    r'<iframe[^>]*src="([^"]*)"[^>]*>', record.google_maps)
                if iframe_match:
                    # Extrae la URL del iframe
                    url = iframe_match.group(1)
                else:
                    # Si no es un iframe, asume que es una URL directa
                    url = record.google_maps
                record.google_maps_url = url
            else:
                record.google_maps_url = False

    # Aplicaciones
    servicios_ids = fields.Many2many(
        'servicios', string="Aplicaciones")


class Servicios(models.Model):
    _name = 'servicios'
    _description = 'Modelo para registrar los tipos de servicios'
    _rec_name = 'servicios'

    servicios = fields.Selection([
        ('venta_vehiculo', 'Venta de Vehículo'),
        ('venta_repuesto', 'Venta de Repuesto'),
        ('servicio_tecnico', 'Servicio Técnico'),
    ], string='Servicios')
