      const extractContent = (text) => {
        let result = [];
        description[key].name.forEach(function (key) {
          if (text.match(name))  {
            result.push(description[key].description)
          }
        });
        return result
      };
      const description = [
      {
        'name' : 'デキストリン', 'description' : '・デキストリンに危険性はありません。', 'state' : 'Good'
      },
      {
        'name' : '乳清たんぱく濃縮物', 'description' : '・乳清たんぱく濃縮物は栄養素のようなものです。', 'state' : 'Good'
      }
      ]
