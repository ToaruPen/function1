    const extractContent = (text) => {
        let result = [];
        description.forEach(function (value) {
          for (let key in obj)  {
            result.push(description[key])
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
