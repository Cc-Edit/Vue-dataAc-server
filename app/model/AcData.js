module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const AcDataSchema = new Schema({
    uuid: { type: String  },
    ip: { type: String  },
    referer: { type: String  },
    type: { type: String  },
    updated: { type: Number },
    token: { type: String  },
    userAgent: { type: String  },
    _acData: Schema.Types.Mixed
  });

  return mongoose.model('AcData', AcDataSchema);
}