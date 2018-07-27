buildTooltip(d, x, y) {
      return [
        this.h('div',{
          style: {
            content: "",
            'z-index': 1,
            position: 'fixed',
            left: `${x-10}px`,
            top: `${y+11}px`,
            display: 'inline-block',
            'border-width': '10px',
            'border-style': 'solid',
            'border-color': 'transparent transparent rgb(81, 98, 111) transparent',
            opacity: '0', 
            transition: 'opacity 2s', 
            delayed: {opacity: '1'}
          }
        },
        this.h('div',{
        style: {
                position: 'fixed',
                'z-index': 1,
                left: `${x-85}px`,
                top: `${y+30}px`,
                background: this.settings.background,
                color: '#c3c3c3',
                //height: '100px',
                //width: '150px',
                display: 'inline-block',
                'box-shadow': '0 5px 20px 0 rgba(17, 17, 17, 0.2)',
                'border-radius': '5px',
                padding: '8px',
                'font-size': this.settings.fontSize,
                'font-family': 'Arial',
                opacity: '0', 
                transition: 'opacity 1s', 
                delayed: {opacity: '1'}
              }
         },[
          this.h('div',{style: {'padding-left': '6px'}},`${d.data.qDimension.label}`),
          this.h('svg', { attrs: {width: 150,height: 50} }, [
            this.h('line', {attrs: {x1: 6, y1: 6, x2: 144, y2: 6, stroke: '#a6b2bc', 'stroke-width': 2}
            }), 
            this.h('circle', { attrs: { cx: 10, cy: 35, r: 5, fill: `${d.data.color.value}`} 
            }),
            this.h('text',{attrs: {x:25, y:40, fill: 'white','font-size':'20px'}},`${d.data.qlabel.value}`)          
          ]),
          this.h('div',{style: {'padding-left': '24px','font-size':'18px'}},qlik_number_format(`${d.data.qMeasure.value}`,`${d.data.qMeasureFmt.value}`))
          //`${d.data.qMeasure.value}`)
         ]
        ))      
      ];
    },
