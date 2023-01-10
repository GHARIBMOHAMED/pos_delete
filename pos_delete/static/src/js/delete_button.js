odoo.define('remove_order_line.RemoveOrderLines', function(require) {
'use strict';
   const PosComponent = require('point_of_sale.PosComponent');
   const ProductScreen = require('point_of_sale.ProductScreen');
   const { useListener } = require('web.custom_hooks');
   const Registries = require('point_of_sale.Registries');
   const { useBarcodeReader } = require('point_of_sale.custom_hooks');

   class ClearAll extends PosComponent {
       constructor() {
           super(...arguments);
            useBarcodeReader(
                {
                    product: this._onCashierScan,
                },
                false
            );
           useListener('click', this.onClick);

       }

      async onClick() {
                var password = await this.showPopup("NumberPopup", {
                        isPassword:true,
                       title: 'Entree le mot de passe',

                   });
                if(password['payload']!=null){
                    if(password['payload'] == '1234'){
                       /* const order = this.env.pos.get_order();
                        order.remove_orderline(order.get_orderlines());*/
                        this.trigger('numpad-click-input', { key: 'Backspace' });
                    }else{
                        this.showPopup("ErrorPopup", {
                           title: 'Erorr',
                            body: 'Le mot de pass que vous avez entree est erronée'

                       });
                    }
                }

       }

          async _onCashierScan(code) {

                if(Sha1.hash('12356') === code.code){
                    this.trigger('numpad-click-input', { key: 'Backspace' });
                    this.trigger('numpad-click-input', { key: 'Backspace' });
                }else{
            return ;
                   /* this.showPopup("ErrorPopup", {
                           title: 'Erorr',
                            body: 'cashier na pas l\'accès a supprimer',

                       });*/
                }
          }

   }



   ClearAll.template = 'ClearAll';
   ProductScreen.addControlButton({
       component: ClearAll,
       condition: function() {
           return this.env.pos;
       },
   });



   Registries.Component.add(ClearAll);
   return ClearAll;
});