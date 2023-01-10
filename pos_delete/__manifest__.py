# -*- coding: utf-8 -*-
{
    'name': "pos_delete",

    'summary': """
        eazeazeaz lorem ipsum""",

    'description': """
        Long description of module's purpose
    """,
    'author': "My Company",
    'website': "http://www.yourcompany.com",
    'category': 'eaze',
    'version': '0.1',
    'depends': ["point_of_sale"],
    'data': [
        # 'security/ir.model.access.csv',
        'views/views.xml',

    ],
    'qweb': [
        'static/src/xml/clear_all_button_view.xml',
        # 'static/src/xml/BarCodeScaneer.xml',
        'static/src/xml/delete_line.xml',
    ],
}
