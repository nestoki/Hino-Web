# -*- coding: utf-8 -*-

from odoo import models, fields, api
import re


class Camion(models.Model):
    _name = 'camion'
    _description = 'Modelo para registrar la informacion de la sección Nosotros Hino'

    name = fields.Char(string='Nombre')
    descripcion = fields.Text(string='Descripción')
    no_serie = fields.Selection(
        [
            ("200", "200"),
            ("300", "300"),
            ("500", "500"),
            ("700", "700"),
        ],
        string="Número de Serie",
    )
    # Foto principal del modelo
    foto = fields.Binary(string='Foto', help='Sube tu foto aquí.')
    foto_logo = fields.Binary(string='Logo de la Serie')

    # Vista 360
    vista_360_url = fields.Char(string="Link de la vista 360")

    # Galeria
    galeria_ids = fields.One2many('camion.galeria', 'camion_id', string='Galería')

    # Video de Youtube
    video_camion = fields.Char(string="Link del Video")
    video_url = fields.Char(compute='_compute_video_url')

    @api.depends('video_camion')
    def _compute_video_url(self):
        for record in self:
            if record.video_camion:
                video_id = record._extract_video_id(record.video_camion)
                if video_id:
                    embedded_url = f"https://www.youtube.com/embed/{video_id}"
                    record.video_url = embedded_url
                else:
                    record.video_url = False
            else:
                record.video_url = False

    def _extract_video_id(self, video_url):
        if 'watch?v=' in video_url:
            start_index = video_url.index('watch?v=') + len('watch?v=')
            end_index = video_url.find('&', start_index)
            if end_index == -1:
                return video_url[start_index:]
            else:
                return video_url[start_index:end_index]
        elif 'youtu.be/' in video_url:
            start_index = video_url.index('youtu.be/') + len('youtu.be/')
            end_index = video_url.find('?', start_index)
            if end_index == -1:
                return video_url[start_index:]
            else:
                return video_url[start_index:end_index]
        elif 'youtube.com/embed/' in video_url:
            start_index = video_url.index(
                'youtube.com/embed/') + len('youtube.com/embed/')
            end_index = video_url.find('?', start_index)
            if end_index == -1:
                return video_url[start_index:]
            else:
                return video_url[start_index:end_index]
        elif '/shorts/' in video_url:
            start_index = video_url.index(
                '/shorts/') + len('/shorts/')
            end_index = video_url.find('?', start_index)
            if end_index == -1:
                return video_url[start_index:]
            else:
                return video_url[start_index:end_index]
        else:
            return None

    # Ficha Técnica
    ficha_tecnica = fields.Binary(
        string='Ficha Técnica', help='Sube la ficha técnica aquí.')

    # Capacidad
    peso_bruto = fields.Char(string="Peso Bruto Vehicular(Kg)")
    peso_convertido = fields.Integer(string='Peso')
    longitud_conevrtida = fields.Integer(string='Longitud')
    peso_tn = fields.Char(compute='_compute_peso_tn')
    traction = fields.Char(string="Tracción")

    @api.depends('peso_bruto')
    def _compute_peso_tn(self):
        for camion in self:
            if camion.peso_bruto:
                match = re.search(r"[-+]?\d+(\.\d*)?", camion.peso_bruto)
                if match:
                    peso_bruto_valor = match.group(0)
                    camion.peso_tn = peso_bruto_valor
                else:
                    camion.peso_tn = 0.0
            else:
                camion.peso_tn = 0.0

    peso_chasis = fields.Char(string="Peso del Chasis(Kg)")
    capacidad = fields.Char(string="Capacidad de Carga(Kg)")

    # Longitud del Chasis
    longitud = fields.Char(string="Longitud utilizable de Chasis(pies)")
    longitud_pie = fields.Char(compute='_compute_longitud_pie')

    carroceria = fields.Char(string="Carrocería volquete de fábrica")

    @api.depends('longitud')
    def _compute_longitud_pie(self):
        for camion in self:
            if camion.longitud:
                match = re.search(r"[-+]?\d+(\.\d*)?", camion.longitud)
                if match:
                    numero = match.group(0)
                    camion.longitud_pie = numero
                else:
                    camion.longitud_pie = 0.0
            else:
                camion.longitud_pie = 0.0

    tipo_rueda = fields.Char(string="Tipo de Ruedas")

    # Motor
    modelo_motor = fields.Char(string='Modelo del Motor')
    tipo_inyeccion = fields.Char(string='Tipo de Inyección')
    potencia = fields.Char(string='Potencia (HP)')
    torque = fields.Char(string='Torque (Nm)')
    alternador = fields.Char(string='Alternador')

    # Transmision
    tipo_transmision = fields.Char(string="Tipo de Transmisión")

    # Garantía
    sello_garantia = fields.Binary(string='Sello de Garantía')

    # Aplicaciones
    aplicacion_ids = fields.Many2many(
        'aplicacion.aplicacion', string="Tipo de Aplicaciones")
    # Cabinas
    cabinas_ids = fields.Many2many(
        'cabina.cabina', string="Tipo de Cabinas")

    doble = fields.Boolean(string="¿Tiene dos cabinas?")
    ilustrativa = fields.Boolean(string="¿La imagen es ilustrativa?")
    volquete = fields.Boolean(string="¿Tiene cabina volquete, cabina ancha?")


class Aplicacion(models.Model):
    _name = 'aplicacion.aplicacion'
    _description = 'Modelo para registrar los tipos de aplicaciones'

    name = fields.Selection([
        ('carga_seca', 'Carga Seca'),
        ('carga_refrigerada', 'Carga Refrigerada'),
        ('ganadera', 'Ganadera'),
        ('plataforma', 'Plataforma'),
        ('volquete', 'Volquete'),
        ('cisterna', 'Cisterna'),
        ('grúa', 'Grúa'),
        ('compactador', 'Compactador'),
    ], string='Aplicación')
