# -*- coding: utf-8 -*-

from odoo import models, fields, api, _
from odoo.exceptions import UserError, ValidationError


# import logging

# _logger = logging.getLogger(__name__)


class Series(models.Model):
    _name = 'series'
    _description = 'Modelo para registrar la informacion de una Serie'
    _sql_constraints = [
        ('uniq_name', 'unique(name)', '¡Ya existe una serie con el mismo nombre!'),
    ]

    name = fields.Char(string='Título Serie Slider')
    serie_slider_ids = fields.One2many('series.slider', 'serie_id', string='Slider')
    serie_responsive_ids = fields.One2many('series.responsive', 'responsive_id', string='Slider Responsive')
    descripcion_serie = fields.Text(string='Descripción Serie Slider')
    button_serie_text = fields.Char(string='Texto del Botón Sección Serie Slider')
    button_serie_url = fields.Char(string='URL del Botón Sección Serie')

    no_serie = fields.Selection(
        [
            ("200", "200"),
            ("300", "300"),
            ("500", "500"),
            ("700", "700"),
        ],
        string="No. de Serie",
    )

    # Informacion de la Serie
    titulo = fields.Char(string='Título')
    foto_camion = fields.Binary(string='Foto del Camión')
    foto_cabina_ancha = fields.Binary(string='Foto Cabina Ancha')
    foto_cabina_angosta = fields.Binary(string='Foto Cabina Angosta')
    texto_1 = fields.Text(string='Breve Información')
    texto_2 = fields.Text(string='Breve Información 2')
    # Tabla
    tabla_ids = fields.One2many('tabla.serie', 'tabla_id', string='Cabina Angosta')

    tabla_idss = fields.One2many('tabla.ancha', 'tabla_id', string='Cabina Ancha')

    # Cabinas
    cabinas_ids = fields.Many2many(
        'cabina.cabina', string="Tipo de Cabinas")


class Cabina(models.Model):
    _name = 'cabina.cabina'
    _description = 'Modelo para registrar los tipos de cabinas'

    name = fields.Selection([
        ('cabina_angosta', 'Cabina Angosta'),
        ('cabina_ancha', 'Cabina Ancha'),
        ('no_aplica', 'No Aplica'),
    ], string='Tipo de Cabinas')


class TablaSerie(models.Model):
    _name = 'tabla.serie'
    _description = 'Modelo para almacenar datos en Serie'

    tabla_id = fields.Many2one('series', string="Tabla")
    peso_tn = fields.Char(string="Peso Bruto Vehicular(Tn)")
    longitud = fields.Char(string="Longitud utilizable de Chasis(pies)")


class TablaSerieCabinaAncha(models.Model):
    _name = 'tabla.ancha'
    _description = 'Modelo para almacenar datos de las cabinas en Serie'

    tabla_id = fields.Many2one('series', string="Tabla Ancha")
    peso_tn = fields.Char(string="Peso Bruto Vehicular(Tn)")
    longitud = fields.Char(string="Longitud utilizable de Chasis(pies)")
