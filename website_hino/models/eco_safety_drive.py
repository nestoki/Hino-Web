# -*- coding: utf-8 -*-
import logging

from odoo import models, fields, api, _
from odoo.exceptions import UserError, ValidationError


class EcoSafetyDrive(models.Model):
    _name = 'eco.safety'
    _description = 'Eco_safety_drive'

    name = fields.Char('Nombre')

    galeria_eco_ids = fields.One2many('eco.galeria', 'eco_id', string='Galería')
    # Video de Youtube
    video_eco = fields.Char(string="Link del Video")
    video_url = fields.Char(compute='_compute_video_url')

    @api.depends('video_eco')
    def _compute_video_url(self):
        for record in self:
            if record.video_eco:
                video_id = record._extract_video_id(record.video_eco)
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